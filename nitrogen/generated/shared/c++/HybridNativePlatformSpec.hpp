///
/// HybridNativePlatformSpec.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#pragma once

#if __has_include(<NitroModules/HybridObject.hpp>)
#include <NitroModules/HybridObject.hpp>
#else
#error NitroModules cannot be found! Are you sure you installed NitroModules properly?
#endif

// Forward declaration of `Insets` to properly resolve imports.
namespace margelo::nitro::unistyles { struct Insets; }
// Forward declaration of `ColorScheme` to properly resolve imports.
namespace margelo::nitro::unistyles { enum class ColorScheme; }
// Forward declaration of `Orientation` to properly resolve imports.
namespace margelo::nitro::unistyles { enum class Orientation; }
// Forward declaration of `Dimensions` to properly resolve imports.
namespace margelo::nitro::unistyles { struct Dimensions; }
// Forward declaration of `UnistylesNativeMiniRuntime` to properly resolve imports.
namespace margelo::nitro::unistyles { struct UnistylesNativeMiniRuntime; }
// Forward declaration of `UnistyleDependency` to properly resolve imports.
namespace margelo::nitro::unistyles { enum class UnistyleDependency; }

#include "Insets.hpp"
#include "ColorScheme.hpp"
#include "Orientation.hpp"
#include <string>
#include "Dimensions.hpp"
#include "UnistylesNativeMiniRuntime.hpp"
#include <functional>
#include <vector>
#include "UnistyleDependency.hpp"

namespace margelo::nitro::unistyles {

  using namespace margelo::nitro;

  /**
   * An abstract base class for `NativePlatform`
   * Inherit this class to create instances of `HybridNativePlatformSpec` in C++.
   * You must explicitly call `HybridObject`'s constructor yourself, because it is virtual.
   * @example
   * ```cpp
   * class HybridNativePlatform: public HybridNativePlatformSpec {
   * public:
   *   HybridNativePlatform(...): HybridObject(TAG) { ... }
   *   // ...
   * };
   * ```
   */
  class HybridNativePlatformSpec: public virtual HybridObject {
    public:
      // Constructor
      explicit HybridNativePlatformSpec(): HybridObject(TAG) { }

      // Destructor
      virtual ~HybridNativePlatformSpec() { }

    public:
      // Properties
      

    public:
      // Methods
      virtual Insets getInsets() = 0;
      virtual ColorScheme getColorScheme() = 0;
      virtual double getFontScale() = 0;
      virtual double getPixelRatio() = 0;
      virtual Orientation getOrientation() = 0;
      virtual std::string getContentSizeCategory() = 0;
      virtual Dimensions getScreenDimensions() = 0;
      virtual Dimensions getStatusBarDimensions() = 0;
      virtual Dimensions getNavigationBarDimensions() = 0;
      virtual bool getPrefersRtlDirection() = 0;
      virtual void setRootViewBackgroundColor(double color) = 0;
      virtual void setNavigationBarBackgroundColor(double color) = 0;
      virtual void setNavigationBarHidden(bool isHidden) = 0;
      virtual void setStatusBarHidden(bool isHidden) = 0;
      virtual void setStatusBarBackgroundColor(double color) = 0;
      virtual void setImmersiveMode(bool isEnabled) = 0;
      virtual UnistylesNativeMiniRuntime getMiniRuntime() = 0;
      virtual void registerPlatformListener(const std::function<void(const std::vector<UnistyleDependency>& /* dependencies */, const UnistylesNativeMiniRuntime& /* miniRuntime */)>& callback) = 0;
      virtual void registerImeListener(const std::function<void(const UnistylesNativeMiniRuntime& /* miniRuntime */)>& callback) = 0;
      virtual void unregisterPlatformListeners() = 0;

    protected:
      // Hybrid Setup
      void loadHybridMethods() override;

    protected:
      // Tag for logging
      static constexpr auto TAG = "NativePlatform";
  };

} // namespace margelo::nitro::unistyles
