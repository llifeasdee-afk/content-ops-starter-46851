import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const formRef = React.createRef<HTMLFormElement>();
    const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;

    if (fields.length === 0) {
        return null;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(formRef.current);
        const value = Object.fromEntries(data.entries());
        alert(`Form data: ${JSON.stringify(value)}`);
    }

    return (
       <form action="https://formspree.io/f/xpwjeyeb" 
  method="POST"
  className="sb-component sb-component-block sb-component-form-block"
>
  <input 
    type="email" 
    name="email" 
    placeholder="Your email" 
    required 
  />

  <textarea 
    name="message" 
    placeholder="Your message" 
    required
  ></textarea>

  <button type="submit">Send</button>
</form>

    );
}
