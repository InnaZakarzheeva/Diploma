package com.diploma;

import com.facebook.react.ReactActivity;
import android.view.WindowManager;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "diploma";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    getWindow().setFlags(
      WindowManager.LayoutParams.FLAG_SECURE,
      WindowManager.LayoutParams.FLAG_SECURE
    );
  }
}
