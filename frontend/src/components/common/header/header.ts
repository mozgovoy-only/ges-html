import Component, { ComponentProps } from '@/base/component';
import { scroll } from '../../../app/js/common';

export default class Header extends Component<HTMLElement> {
    isScrolling: boolean;
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
        this.isScrolling = false;
        this.onWindowScroll = this.onWindowScroll.bind(this);
        this.init();
    }
    init() {
        window.addEventListener('scroll', this.onWindowScroll);
    }
    onWindowScroll() {
        const { classList } = this.nRoot;
        const { offsetHeight } = this.nRoot;

        if (this.isScrolling === scroll.position.y > offsetHeight) return;
        this.isScrolling = scroll.position.y > offsetHeight;
        classList.toggle('is-scrolling', this.isScrolling);
    }
    destroy() {
        window.removeEventListener('scroll', this.onWindowScroll);
    };
}
