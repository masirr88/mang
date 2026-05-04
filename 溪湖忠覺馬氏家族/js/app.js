    let nextBtn = document.querySelector('.next') 
    let prevBtn = document.querySelector('.prev')
    
    let slider = document.querySelector('.slider')
    let sliderList = slider.querySelector('.slider .list')
    
    let thumbnail = document.querySelector('.thumbnail')
    let thumbnailItems = thumbnail.querySelectorAll('.item')

    
    thumbnail.appendChild(thumbnailItems[0])
  
    nextBtn.onclick = function() {
        moveSlider('next')
    }

    prevBtn.onclick = function() {
        moveSlider('prev')
    }

    function moveSlider(direction) {
        let sliderItems = slider.querySelectorAll('.item') 
        let thumbnailItems = document.querySelectorAll('.thumbnail .item')

        if(direction === 'next'){
            sliderList.appendChild(sliderItems[0])
            thumbnail.appendChild(thumbnailItems[0])
            slider.classList.add('next')        
        } else {
            sliderList.appendChild(sliderItems[-1])
            thumbnail.appendChild(thumbnailItems[-1])
            slider.classList.add('prev')        
        }
    }

    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('prev')
        } else {
            slider.classList.remove('next')
        }
    }, {once: true})
