import Component, { ComponentProps } from '@/base/component';

type BlockRelationOptions = {

}

export default class BlockRelation extends Component<HTMLElement, BlockRelationOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
