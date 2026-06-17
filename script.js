document.addEventListener("DOMContentLoaded", () => {
  // --- 1. SMOOTH INTEGRATED POINTER ACCENT ---
  const ring = document.querySelector(".cursor-ring");
  const clickables = document.querySelectorAll("a, .video-wrapper-block, tr");

  document.addEventListener("mousemove", (e) => {
    ring.style.left = `${e.clientX}px`;
    ring.style.top = `${e.clientY}px`;
  });

  clickables.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      ring.style.width = "50px";
      ring.style.height = "50px";
      ring.style.backgroundColor = "rgba(90, 102, 94, 0.08)";
    });
    target.addEventListener("mouseleave", () => {
      ring.style.width = "30px";
      ring.style.height = "30px";
      ring.style.backgroundColor = "transparent";
    });
  });

  // --- 2. ROBUST INTERSECTION REVEAL CONTROLLER (FADE IN/OUT MECHANICAL EDGE) ---
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-triggered");
        } else {
          // Resets element opacity gracefully if user scrolls backward back up past viewport bounds
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("is-triggered");
          }
        }
      });
    },
    {
      threshold: 0.02, // Triggers immediately as edge appears to prevent rendering hangs
      rootMargin: "0px 0px -20px 0px",
    },
  );

  revealElements.forEach((item) => {
    revealObserver.observe(item);
  });

  // --- 3. PARALLAX MATH MATRIX ENGINE ---
  window.addEventListener("scroll", () => {
    const scrolledValue = window.scrollY;

    // Modulates main header video layer speeds against global layout pacing
    const heroVideo = document.querySelector(".hero-bg-video-canvas video");
    if (heroVideo) {
      heroVideo.style.transform = `translateY(${scrolledValue * 0.35}px)`;
    }

    // Handles smooth asymmetric parallax micro-shifts on secondary staggered video nodes
    const secondaryVideos = document.querySelectorAll(
      ".timeless-video-peek-right, .logs-video-offset-thumbnail",
    );
    secondaryVideos.forEach((vid) => {
      const boundingVal = vid.getBoundingClientRect();
      if (boundingVal.top < window.innerHeight && boundingVal.bottom > 0) {
        const directOffset = (window.innerHeight - boundingVal.top) * 0.05;
        vid.querySelector("video").style.transform =
          `translateY(${directOffset}px)`;
      }
    });
  });
});
