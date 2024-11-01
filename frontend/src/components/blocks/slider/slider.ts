import Component, { ComponentProps } from '@/base/component';

type SliderOptions = {

}

export default class Slider extends Component<HTMLElement, SliderOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
