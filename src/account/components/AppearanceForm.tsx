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
    <form
      className="flex flex-col p-4 gap-4 sm:px-8 sm:py-4 rounded-lg shadow-lg sm:gap-6 w-full"
      onSubmit={ onSubmitForm }>
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Title"
        name="title"
        type="text"
        value={ title }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Description"
        name="description"
        type="text"
        value={ description }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Content"
        name="content"
        type="text"
        value={ content }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Profession"
        name="profession"
        type="text"
        value={ profession }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg"
        label="Header Color"
        name="headerColor"
        type="color"
        value={ headerColor }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Header Image"
        name="headerImage"
        type="text"
        placeholder="Paste the URL of your image"
        value={ headerImage }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg"
        label="Background Color"
        name="bgColor"
        type="color"
        value={ bgColor }
        onChange={ onInputChange }
      />
      <FormField
        containerClassName="flex flex-col gap-4 sm:gap-4"
        labelClassName="text-xl font-bold text-gray-700 sm:text-xl"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-lg sm:px-4 sm:py-3"
        label="Background Image"
        name="bgImage"
        type="text"
        placeholder="Paste the URL of your image"
        value={ bgImage }
        onChange={ onInputChange }
      />
      <button
        className="w-full py-2 text-lg font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-100"
      > Save </button>
    </form>
  );
};
