import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html'
})
export class App implements OnInit {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  currentSection = 0;

  private routeToSection: { [key: string]: number } = {
    '/home': 0,
    '/portfolio': 1,
    '/about': 2,
    '/contact': 3
  };

  constructor(private router: Router) {
    // Track route changes to update current section
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentSection = this.routeToSection[event.url] || 0;
    });
  }

  ngOnInit() {
    // Set initial section
    this.currentSection = this.routeToSection[this.router.url] || 0;
    
    // Add horizontal scroll support after view init
    setTimeout(() => {
      this.setupHorizontalScroll();
    }, 100);
  }

  navigateToSection(index: number) {
    const routes = ['/home', '/portfolio', '/about', '/contact'];
    if (index >= 0 && index < routes.length) {
      this.router.navigate([routes[index]]);
    }
  }

  private setupHorizontalScroll() {
    const container = document.querySelector('.horizontal-scroll-container') as HTMLElement;
    if (!container) return;

    const routes = ['/home', '/portfolio', '/about', '/contact'];
    let isScrolling = false;

    // Handle mouse wheel for navigation between sections
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      isScrolling = true;
      
      // Determine scroll direction and navigate to next/previous section
      if (e.deltaY > 0) {
        // Scroll down/right - go to next section
        const nextIndex = Math.min(this.currentSection + 1, routes.length - 1);
        if (nextIndex !== this.currentSection) {
          this.router.navigate([routes[nextIndex]]);
        }
      } else {
        // Scroll up/left - go to previous section
        const prevIndex = Math.max(this.currentSection - 1, 0);
        if (prevIndex !== this.currentSection) {
          this.router.navigate([routes[prevIndex]]);
        }
      }
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    }, { passive: false });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (isScrolling) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          const prevIndex = Math.max(this.currentSection - 1, 0);
          if (prevIndex !== this.currentSection) {
            this.router.navigate([routes[prevIndex]]);
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          const nextIndex = Math.min(this.currentSection + 1, routes.length - 1);
          if (nextIndex !== this.currentSection) {
            this.router.navigate([routes[nextIndex]]);
          }
          break;
        case 'Home':
          e.preventDefault();
          this.router.navigate([routes[0]]);
          break;
        case 'End':
          e.preventDefault();
          this.router.navigate([routes[routes.length - 1]]);
          break;
      }
    });

    // Handle touch gestures for mobile
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
      isSwiping = false;
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
      if (isScrolling) return;
      
      const currentX = e.touches[0].pageX;
      const currentY = e.touches[0].pageY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;
      
      // Only handle horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        isSwiping = true;
      }
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      if (!isSwiping || isScrolling) return;
      
      const currentX = e.changedTouches[0].pageX;
      const diffX = startX - currentX;
      
      isScrolling = true;
      
      if (diffX > 50) {
        // Swipe left - next section
        const nextIndex = Math.min(this.currentSection + 1, routes.length - 1);
        if (nextIndex !== this.currentSection) {
          this.router.navigate([routes[nextIndex]]);
        }
      } else if (diffX < -50) {
        // Swipe right - previous section
        const prevIndex = Math.max(this.currentSection - 1, 0);
        if (prevIndex !== this.currentSection) {
          this.router.navigate([routes[prevIndex]]);
        }
      }
      
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    });
  }
}
