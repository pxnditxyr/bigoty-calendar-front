
interface FormFieldProps {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  min?: string;
  placeholder?: string;
  onChange?: ( { target } : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
  className?: string;
  label?: string;
  labelClassName?: string;
  required?: boolean;
  error?: string;
}

export const FormField = ( { id, type, name, value, min, placeholder, onChange, className, label, labelClassName, error, required } : FormFieldProps ) => {
  return (
    <div>
      {
        ( label ) && <label htmlFor={ id } className={ labelClassName }>{ label }</label>
      }
      <input
        type={ type || 'text' }
        id={ id }
        name={ name  }
        value={ value }
        min={ min }
        placeholder={ placeholder }
        onChange={ onChange }
        className={ className }
        required={ required }
      />
      {
        ( error ) && <span> { error } </span>
      }
    </div>
  );
};
