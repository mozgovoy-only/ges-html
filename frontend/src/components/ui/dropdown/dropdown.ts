import Component, { ComponentProps } from '@/base/component';
import Drop from 'tether-drop';
type DropdownOptions = {

}

export default class Dropdown extends Component<HTMLElement, DropdownOptions> {
    button: HTMLButtonElement | null = null;
    instance: Drop | null = null
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.init()
    }
    init() {
        this.instance = new Drop({
            target: this.nRoot as HTMLElement,
            });

        this.button = this.getElement('button') as HTMLButtonElement;

        this.button?.addEventListener('click', this.onButtonClick)
    }

    onButtonClick() {
    }
    destroy() {
        this.instance?.destroy();
    }
}
