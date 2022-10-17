import { FormEvent } from 'react';
import { IFormState, useForm } from '../../hooks';
import { IPage } from '../../interfaces';
import { FormField } from '../../ui';

interface AppearanceFormProps {
  page: IPage;
  onSubmitPage: ( page : IPage ) => Promise<void>;
}

export const AppearanceForm = ( { page, onSubmitPage } : AppearanceFormProps ) => {

  const {
    title,
    description,
    content,
    profession,
    headerColor,
    headerImage,
    bgColor,
    bgImage,
    onInputChange
  } = useForm( page as unknown as IFormState );

  const onSubmitForm = async ( event : FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    await onSubmitPage({ title, description, content, profession, headerColor, headerImage, bgColor, bgImage });
  }

  return (
    <form onSubmit={ onSubmitForm }>
      <FormField
        label="Title"
        name="title"
        type="text"
        value={ title }
        onChange={ onInputChange }
      />
      <FormField
        label="Description"
        name="description"
        type="text"
        value={ description }
        onChange={ onInputChange }
      />
      <FormField
        label="Content"
        name="content"
        type="text"
        value={ content }
        onChange={ onInputChange }
      />
      <FormField
        label="Profession"
        name="profession"
        type="text"
        value={ profession }
        onChange={ onInputChange }
      />
      <FormField
        label="Header Color"
        name="headerColor"
        type="color"
        value={ headerColor }
        onChange={ onInputChange }
      />
      <FormField
        label="Header Image"
        name="headerImage"
        type="text"
        placeholder="Paste the URL of your image"
        value={ headerImage }
        onChange={ onInputChange }
      />
      <FormField
        label="Background Color"
        name="bgColor"
        type="color"
        value={ bgColor }
        onChange={ onInputChange }
      />
      <FormField
        label="Background Image"
        name="bgImage"
        type="text"
        placeholder="Paste the URL of your image"
        value={ bgImage }
        onChange={ onInputChange }
      />
      <button type="submit"> Save </button>
    </form>
  );
};
