import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  activeFilter = 'all';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Bloom Bakery Brand',
      description: 'Complete brand identity for a local bakery',
      category: 'branding',
      icon: '🧁',
      color: 'linear-gradient(135deg, #FFB6C1, #FF69B4)'
    },
    {
      id: 2,
      title: 'Creative Portfolio Site',
      description: 'Personal portfolio website design',
      category: 'web',
      icon: '💻',
      color: 'linear-gradient(135deg, #FFE4E1, #FFC0CB)'
    },
    {
      id: 3,
      title: 'Spring Wedding Invitation',
      description: 'Elegant print design for spring wedding',
      category: 'print',
      icon: '💌',
      color: 'linear-gradient(135deg, #FFF0F5, #FFB6C1)'
    },
    {
      id: 4,
      title: 'Whimsical Character Set',
      description: 'Cute character illustrations for children\'s book',
      category: 'illustration',
      icon: '🎨',
      color: 'linear-gradient(135deg, #FFCCCB, #FF7F7F)'
    },
    {
      id: 5,
      title: 'Cafe Luna Branding',
      description: 'Modern coffee shop brand identity',
      category: 'branding',
      icon: '☕',
      color: 'linear-gradient(135deg, #DB7093, #C71585)'
    },
    {
      id: 6,
      title: 'E-commerce Fashion App',
      description: 'Mobile app UI/UX for fashion brand',
      category: 'web',
      icon: '📱',
      color: 'linear-gradient(135deg, #FF69B4, #DC143C)'
    },
    {
      id: 7,
      title: 'Annual Report Design',
      description: 'Corporate annual report layout',
      category: 'print',
      icon: '📊',
      color: 'linear-gradient(135deg, #FFE4E1, #DDA0DD)'
    },
    {
      id: 8,
      title: 'Botanical Illustrations',
      description: 'Hand-drawn botanical art series',
      category: 'illustration',
      icon: '🌸',
      color: 'linear-gradient(135deg, #F0F8FF, #E6E6FA)'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[onclick*="${filter}"]`) as HTMLElement;
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }
}
