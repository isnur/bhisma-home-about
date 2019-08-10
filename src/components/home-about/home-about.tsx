import { Component, Host, Prop, State, h } from '@stencil/core';
import { IToggleOptions } from '../../utils/interface';

@Component({
  tag: 'home-about',
  styleUrl: 'home-about.scss'
})
export class HomeAbout {
  @Prop() toggleOptions: IToggleOptions = {
    textOpen: 'Open',
    textClose: 'Close',
    textPosition: 'left',
    textClass: ''
  };
  @State() contentExpanded: boolean;

  toggle() {
    this.contentExpanded = !this.contentExpanded;
  }

  setPosition() {
    if (this.toggleOptions.textPosition === 'right') {
      return 'align-right';
    } else if (this.toggleOptions.textPosition === 'center') {
      return 'align-center';
    } else {
      return 'align-left';
    }
  }

  componentDidLoad() {
    this.contentExpanded = false;
  }

  render() {
    return (
      <Host>
        <div class={{
          'content': true,
          'active': this.contentExpanded
        }}>
          <slot></slot>
        </div>
        <div class={'content-toggle ' + (this.setPosition()) + ' ' + this.toggleOptions.textClass} onClick={() => this.toggle()}>
          {this.contentExpanded ? this.toggleOptions.textClose : this.toggleOptions.textOpen}
        </div>
      </Host>
    );
  }
}
