import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  const { heading, text, imageUrl, imageLink } = attributes;

  const onChangeHeading = (newHeading) => {
    setAttributes({ heading: newHeading });
  };

  const onChangeText = (newText) => {
    setAttributes({ text: newText });
  };

  const onSelectImage = (media) => {
    setAttributes({
      imageUrl: media.url,
    });
  };

  const onChangeImageLink = (newLink) => {
    setAttributes({ imageLink: newLink });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__('Image Settings', 'your-text-domain')}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={['image']}
              render={({ open }) => (
                <Button onClick={open}>{__('Choose Image', 'your-text-domain')}</Button>
              )}
            />
          </MediaUploadCheck>
          <TextControl
            label={__('Image Link', 'your-text-domain')}
            value={imageLink}
            onChange={onChangeImageLink}
          />
        </PanelBody>
      </InspectorControls>
      <div className='testblock'>
        <div className="testblock__left">
          {imageUrl && (
              <img src={imageUrl} alt="" />
          )}
        </div>
        <div className="testblock__right">
          <RichText
            tagName="h2"
            onChange={onChangeHeading}
            value={heading}
            placeholder={__('Add Heading...', 'your-text-domain')}
          />
          <RichText
            tagName="p"
            onChange={onChangeText}
            value={text}
            placeholder={__('Write your text...', 'your-text-domain')}
          />
        </div>
        <div className="testblock__footer">
          &copy; {new Date().toLocaleString('default', { hour: '2-digit', minute: '2-digit', month: 'long', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
}
