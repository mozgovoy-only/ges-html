import Component, { ComponentProps } from '@/base/component';

type CardAlbumOptions = {

}

export default class CardAlbum extends Component<HTMLElement, CardAlbumOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
