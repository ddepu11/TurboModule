package com.rtncalculator

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.rtncalculator.NativeCalculatorSpec
import android.hardware.camera2.CameraManager
import android.content.Context

class CalculatorModule(reactContext: ReactApplicationContext) : NativeCalculatorSpec(reactContext) {

  private val context: ReactApplicationContext = reactContext

  override fun getName() = NAME

  lateinit var cameraManager: CameraManager
  lateinit var cameraID: String

  override fun switchOnFlashLight(){

    try {
      cameraManager = context.getSystemService(Context.CAMERA_SERVICE) as CameraManager
      cameraID = cameraManager.cameraIdList[0]

//      if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
      cameraManager.setTorchMode(cameraID, true)
//      }
    } catch (e: Exception) {
      e.printStackTrace()
    }
  }


  override fun switchOffFlashLight(){
    cameraManager = context.getSystemService(Context.CAMERA_SERVICE) as CameraManager
    cameraID = cameraManager.cameraIdList[0]
    cameraManager.setTorchMode(cameraID, false)
  }

  companion object {
    const val NAME = "RTNCalculator"
  }
}