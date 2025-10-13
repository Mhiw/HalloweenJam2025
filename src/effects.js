let shakeDuration = 0;
let shakeMagnitude = 0;

function startCameraShake(duration, magnitude) {
  shakeDuration = duration;
  shakeMagnitude = magnitude;
}

function applyCameraShake() {
  if (shakeDuration > 0) {
    const shakeX = random(-shakeMagnitude, shakeMagnitude);
    const shakeY = random(-shakeMagnitude, shakeMagnitude);
    translate(shakeX, shakeY);

    shakeDuration -= deltaTime;
  }
}
