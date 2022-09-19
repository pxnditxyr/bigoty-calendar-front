
interface FormFieldProps {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: ( event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
  className?: string;
  label?: string;
  labelClassName?: string;
  error?: string;
}

export const FormField = ( { id, type, name, value, placeholder, onChange, className, label, labelClassName, error } : FormFieldProps ) => {
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
        placeholder={ placeholder }
        onChange={ onChange }
        className={ className }
      />
      {
        ( error ) && <span> { error } </span>
      }
    </div>
  );
};
