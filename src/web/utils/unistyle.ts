import type { UnistyleDependency } from '../../specs/NativePlatform'
import { ColorScheme, Orientation } from '../../specs/types'
import type { StyleSheet, StyleSheetWithSuperPowers, UnistylesValues } from '../../types/stylesheet'
import { isUnistylesMq, parseMq } from '../../mq'
import { keyInObject, reduceObject } from './common'
import type { UnistylesBreakpoints } from '../../global'
import { UnistylesWeb } from '../index'

export const schemeToTheme = (scheme: ColorScheme) => {
    switch (scheme) {
        case ColorScheme.Dark:
            return 'dark'
        case ColorScheme.Light:
        default:
            return 'light'
    }
}

export type UnistyleSecrets = {
    __uni__stylesheet: StyleSheetWithSuperPowers<StyleSheet>,
    __uni__key: string,
    __uni__args?: Array<any>
}

export const assignSecrets = <T>(object: T, secrets: UnistyleSecrets) => {
    // @ts-expect-error - assign secrets to object
    object.__uni__secrets__ = secrets

    return object
}

export const extractSecrets = (object: any) => {
    return object && keyInObject(object, '__uni__secrets__') ? object.__uni__secrets__ as UnistyleSecrets : undefined
}

export const removeInlineStyles = (values: UnistylesValues) => {
    const returnValue = {}

    Object.defineProperties(returnValue, reduceObject(values, value => ({
        value,
        enumerable: false,
        configurable: true
    })))

    return returnValue
}

export const isInDocument = (element: HTMLElement) => document.body.contains(element)

export const getMediaQuery = (query: string, allBreakpoints: Array<string>) => {
    if (Object.values(Orientation).includes(query as Orientation)) {
        return `(orientation: ${query})`
    }

    if (isUnistylesMq(query)) {
        const { minWidth, maxWidth, minHeight, maxHeight } = parseMq(query)

        return [
            minWidth ? `(min-width: ${minWidth}px)` : undefined,
            maxWidth ? `(max-width: ${maxWidth}px)` : undefined,
            minHeight ? `(min-height: ${minHeight}px)` : undefined,
            maxHeight ? `(max-height: ${maxHeight}px)` : undefined
        ].filter(Boolean).join(' and ')
    }

    const breakpointValue = UnistylesWeb.runtime.breakpoints[query as keyof UnistylesBreakpoints] ?? 0
    const nextBreakpoint = allBreakpoints
            .filter((b): b is keyof UnistylesBreakpoints => b in UnistylesWeb.runtime.breakpoints)
            .map(b => UnistylesWeb.runtime.breakpoints[b] as number)
            .sort((a, b) => a - b)
            .find(b => b > breakpointValue)
        const queries = [
            `(min-width: ${breakpointValue}px)`,
            nextBreakpoint ? `(max-width: ${nextBreakpoint - 1}px)` : undefined,
        ].filter(Boolean).join(' and ')

        return `@media ${queries}`
}

export const extractUnistyleDependencies = (value: any) => {
    if (!value) {
        return []
    }

    const dependencies: Array<UnistyleDependency> = keyInObject(value, 'uni__dependencies') ? value.uni__dependencies : []

    return Array.isArray(dependencies) ? dependencies : []
}
