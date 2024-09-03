import { ColorScheme, type AppThemeName} from '../src/specs/types'

export const reduceObject = <TObj extends Record<string, any>, TReducer>(
    obj: TObj,
    reducer: (value: TObj[keyof TObj], key: keyof TObj) => TReducer,
) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, reducer(value as TObj[keyof TObj], key)])) as { [K in keyof TObj]: TReducer }

export const toReactNativeClassName = (className: string) => ({
    $$css: true,
    'unistyles-class': className
})

export const keyInObject = <T extends Record<string, any>>(obj: T, key: PropertyKey): key is keyof T => key in obj

export const camelToKebab = (str: string) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

export const schemeToTheme = (scheme: ColorScheme): AppThemeName => {
    switch (scheme) {
        case ColorScheme.Dark:
            return 'dark'
        case ColorScheme.Light:
        default:
            return 'light'
    }
}

export const hexToRGBA = (hex: string, opacity: number) => hex
    .replace('#', '')
    .split(/(?=(?:..)*$)/)
    .map(x => parseInt(x, 16))
    .filter(num => !isNaN(num))
    .reduce((acc, color) => `${acc}${color},`, 'rgba(')
    .concat(`${opacity})`)
