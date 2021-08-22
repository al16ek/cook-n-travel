function autoSlide() {
  var currentImage = $(".slider__img.curry")
  var currentImageIndex = $(".slider__img.curry").index()
  var nextImageIndex = currentImageIndex + 1
  var nextImage = $(".slider__img").eq(nextImageIndex)
  currentImage.removeClass("curry")
  if (nextImageIndex == $(".slider__img:last").index() + 1) {
    $(".slider__img").eq(0)
    $(".slider__img").eq(0).addClass("curry")
  } else {
    nextImage.addClass("curry")
  }
}

$(document).ready(function () {
  $(".slider__next").click(function (event) {
    event.preventDefault()
    var currentImage = $(".slider__img.curry")
    var currentImageIndex = $(".slider__img.curry").index()
    var nextImageIndex = currentImageIndex + 1
    var nextImage = $(".slider__img").eq(nextImageIndex)
    currentImage.removeClass("curry")
    if (nextImageIndex == $(".slider__img:last").index() + 1) {
      $(".slider__img").eq(0)
      $(".slider__img").eq(0).addClass("curry")
    } else {
      nextImage.addClass("curry")
    }
  })

  $(document).ready(function () {
    $(".slider__prev").click(function (event) {
      event.preventDefault()
      var currentImage = $(".slider__img.curry")
      var currentImageIndex = $(".slider__img.curry").index()
      var prevImageIndex = currentImageIndex - 1
      var prevImage = $(".slider__img").eq(prevImageIndex)
      currentImage.removeClass("curry")
      prevImage.addClass("curry")
    })
  })
})

setInterval(autoSlide, 3000)
