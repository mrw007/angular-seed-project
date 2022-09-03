import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Md5 } from './Md5';

/**
 * Avatar Component
 */
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit, OnChanges {
  /**
   * The user email adresse for Gravatar.com
   */
  @Input() email: string = '';

  /**
   * The full name of the user for the avatar letter
   * @type {string}
   */
  @Input() name: string = '';

  /**
   * The display size
   * @type {number}
   */
  @Input() size: number | string = 100;

  /**
   * Value to set a fixed color via HEX code
   * @type {string}
   */
  @Input() background = this.getRandomColor();

  /**
   * Value to set the display type
   * @type {string} - none|circle|rounded
   */
  @Input() displayType = 'none';

  /**
   * Value to set a default letter
   * @type {string}
   */
  @Input() letter = '?';

  /**
   * Value to set a default protocol
   * @type {string|null} - http|https
   */
  @Input() defaultProtocol: string | null = null;

  /**
   * Gravatar URL
   */
  gravatarUrl: string = '';
  /**
   * Display Image
   */
  displayImage = true;
  /**
   * Font Size
   */
  fontSize = 49;
  /**
   * Font Color
   */
  fontColor = '#FFFFFF';

  /**
   * Props
   */
  props: any = null;

  /**
   * Randomly generates a HEX color
   * @return {string}
   */
  getRandomColor(): string {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /**
   * Set the avatar letter based on full name or email
   */
  getLetter(): void {
    if (this.name && this.name.length) {
      const nameInitials = this.name.match(/\b(\w)/g);
      if (nameInitials) {
        const nameLetters = nameInitials.slice(0, 3).join('');
        this.letter = nameLetters.toUpperCase();
      } else {
        this.letter = this.name[0];
      }
    } else if (this.email && this.email.length) {
      const emailInitials = this.email.split('@')[0].match(/\b(\w)/g);
      const emailLetters = emailInitials?.slice(0, 3).join('');
      this.letter = emailLetters?.toUpperCase() || '';
    }
  }

  /**
   * Create a Gravatar API url
   */
  getAvatar(): void {
    if (
      this.email &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
    ) {
      const hash = Md5.init(this.email);

      const protocol = this.defaultProtocol ? this.defaultProtocol + ':' : '';
      this.gravatarUrl = `${protocol}//www.gravatar.com/avatar/${hash}?s=${this.size}&d=404`;
      this.displayImage = true;
    } else {
      this.displayImage = false;
    }
  }

  /**
   * Set CSS Props
   */
  setCssProps() {
    this.fontSize = (39 * +this.size) / 100;
    this.props = {
      size: `${this.size}px`,
      lineheight: `${this.size}px`,
      background: this.background,
      fontSize: `${this.fontSize}px`,
    };

    switch (this.displayType) {
      case 'rounded':
        this.props['borderradius'] = '5%';
        break;
      case 'circle':
        this.props['borderradius'] = '50%';
        break;
      default:
        this.props['borderradius'] = '0';
    }
  }

  /**
   * Set avatar size, background and display type
   */
  ngOnInit() {
    this.setCssProps();

    this.getLetter();
    this.getAvatar();
  }

  /**
   * Updates avatar image and letter on email updates
   */
  ngOnChanges() {
    this.getAvatar();
    this.getLetter();
  }
}
