(function addAnimations() {
    // Loading overlay
    const loader = document.getElementById('loader');
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);

    // Add animation handlers to all of the nav links
    document.querySelectorAll('.nav a')
        .forEach(a => a.addEventListener('click', e => {
            e.preventDefault();
            triggerGust(document.querySelector(a.hash));
        }));

    document.querySelector('.btn-cta').onclick = () => triggerGust(document.getElementById('projects'));
    document.addEventListener('click', clickEffect);

    function triggerGust(target) {
        const distanceDown = target.getBoundingClientRect().top;
        target.scrollIntoView();
        if (Math.abs(distanceDown) < 100) return;
        let curve;
        if (distanceDown > 0) {
            curve = document.getElementById('curve-r');
            curve.classList = "curve enable-anim";
            if (distanceDown < 250) curve.classList += ' weak';
        } else {
            curve = document.getElementById('curve-l');
            curve.classList = "curve enable-anim reverse-anim";
            if (distanceDown > -250) curve.classList += ' weak';
        }
        setTimeout(() => curve.classList = "curve", 500);
    }

    function clickEffect(e) {
        var d = document.createElement("div");
        d.className = "click-effect";
        // Use offsetTop and offsetLeft if using element's position instead of mouse's.
        d.style.top = e.clientY + "px";
        d.style.left = e.clientX + "px";
        document.body.appendChild(d);
        d.addEventListener('animationend', function () { d.parentElement.removeChild(d); }.bind(this));
    }

})();
