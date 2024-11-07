import Component, { ComponentProps } from '@/base/component';

type DropdownOptions = {

}

export default class Dropdown extends Component<HTMLElement, DropdownOptions> {
    button: HTMLButtonElement | null = null;
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.init()
    }
    init() {
        this.button = this.getElement('button') as HTMLButtonElement;

        this.button?.addEventListener('click', this.onButtonClick)
    }

    onButtonClick() {
    }
    destroy() {
        // Destroy function
    }
}
