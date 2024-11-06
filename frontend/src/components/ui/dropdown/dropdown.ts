import Component, { ComponentProps } from '@/base/component';

type DropdownOptions = {

}

export default class Dropdown extends Component<HTMLElement, DropdownOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
