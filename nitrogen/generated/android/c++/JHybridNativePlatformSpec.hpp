///
/// HybridNativePlatformSpec.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#pragma once

#include <NitroModules/JHybridObject.hpp>
#include <fbjni/fbjni.h>
#include "HybridNativePlatformSpec.hpp"




namespace margelo::nitro::unistyles {

  using namespace facebook;

  class JHybridNativePlatformSpec: public jni::HybridClass<JHybridNativePlatformSpec, JHybridObject>,
                                   public virtual HybridNativePlatformSpec {
  public:
    static auto constexpr kJavaDescriptor = "Lcom/margelo/nitro/unistyles/HybridNativePlatformSpec;";
    static jni::local_ref<jhybriddata> initHybrid(jni::alias_ref<jhybridobject> jThis);
    static void registerNatives();

  protected:
    // C++ constructor (called from Java via `initHybrid()`)
    explicit JHybridNativePlatformSpec(jni::alias_ref<jhybridobject> jThis) :
      HybridObject(HybridNativePlatformSpec::TAG),
      _javaPart(jni::make_global(jThis)) {}

  public:
    size_t getExternalMemorySize() noexcept override;

  public:
    inline const jni::global_ref<JHybridNativePlatformSpec::javaobject>& getJavaPart() const noexcept {
      return _javaPart;
    }

  public:
    // Properties
    

  public:
    // Methods
    Insets getInsets() override;
    ColorScheme getColorScheme() override;
    double getFontScale() override;
    double getPixelRatio() override;
    Orientation getOrientation() override;
    std::string getContentSizeCategory() override;
    Dimensions getScreenDimensions() override;
    Dimensions getStatusBarDimensions() override;
    Dimensions getNavigationBarDimensions() override;
    bool getPrefersRtlDirection() override;
    void setRootViewBackgroundColor(double color) override;
    void setNavigationBarBackgroundColor(double color) override;
    void setNavigationBarHidden(bool isHidden) override;
    void setStatusBarHidden(bool isHidden) override;
    void setStatusBarBackgroundColor(double color) override;
    void setImmersiveMode(bool isEnabled) override;
    UnistylesNativeMiniRuntime getMiniRuntime() override;
    void registerPlatformListener(const std::function<void(const std::vector<UnistyleDependency>& /* dependencies */)>& callback) override;
    void registerImeListener(const std::function<void()>& callback) override;
    void unregisterPlatformListeners() override;

  private:
    friend HybridBase;
    using HybridBase::HybridBase;
    jni::global_ref<JHybridNativePlatformSpec::javaobject> _javaPart;
  };

} // namespace margelo::nitro::unistyles
