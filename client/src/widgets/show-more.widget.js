import { insertSiblingAfter } from '../utils/insertAfter';

export class ShowMoreWidget {
    defaults = {
        isToggled: false,
        maxAllowedTextLength: 500,
        minAllowedTextLength: 100
    };

    /**
      * show/hide more text
      * @param {HTML} el
      * @param {Object} opts
      */
    constructor(el, opts) {
        this.el = el;
        this.btn = null;
        this.fieldText = opts.descriptionText || '';
        this.isToggled = opts.isToggled || this.defaults.isToggled;

        this.options = {
            maxAllowedTextLength: opts.maxAllowedTextLength || this.defaults.maxAllowedTextLength
        };

        if (!this.fieldText || (this.fieldText && this.fieldText.length < this.defaults.minAllowedTextLength)) {
            return;
        }

        this.renderButton();
        this.toggle();

        this.button = this.el.parentNode.querySelector('.show-more-btn');
        this.button.addEventListener('click', this.toggle, false);
    }

    renderButton = () => {
        const btn = document.createElement('div');
        btn.setAttribute('class','show-more-btn');
        btn.innerText = 'Show more';

        this.btn = btn;

        insertSiblingAfter(btn, this.el);
    };

    toggle = () => {
        const partialText = this.fieldText.slice(0, this.options.maxAllowedTextLength);

        if (this.isToggled) {
            this.el.innerText = partialText + partialText[partialText.length -1] + '...';
            this.btn.innerText = 'Show more';
        } else {
            this.el.innerText = this.fieldText;
            this.btn.innerText = 'Hide text';
        }

        this.isToggled = !this.isToggled;
    };

    remove = () => {
        this.btn.remove();
        this.button.removeEventListener('click', this.toggle);
    }
}