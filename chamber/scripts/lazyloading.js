const images = document.querySelectorAll("[data-src]");

/*const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};*/
function preloadImg(img){
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.src = src;
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 200px 0px"
}
const imgObserver = new IntersectionObserver((entries,
   imgObserver)=>{
    entries.forEach(entry =>{
      if (!entry.isIntersecting){
        return;
      }
      else{
        preloadImg(entry.target);
        imgObserver.unobserve(entry.target);
      }
    })
}, imgOptions);

images.forEach(image =>{
  imgObserver.observe(image);
})

/*const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
  };

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }*/