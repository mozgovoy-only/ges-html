import Component, { ComponentProps } from '@/base/component';

type SliderGalleryOptions = {

}

export default class SliderGallery extends Component<HTMLElement, SliderGalleryOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
