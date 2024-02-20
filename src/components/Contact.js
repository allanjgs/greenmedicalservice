import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { isMobile } from 'react-device-detect';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'O nome é obrigatório';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'O telefone é obrigatório';
    }
    if (!formData.email.trim()) {
      errors.email = 'O e-mail é obrigatório';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Insira um e-mail válido';
    }
    if (!formData.message.trim()) {
      errors.message = 'A mensagem é obrigatória';
    }

    setFormError(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Configuração do emailjs - Substitua com suas próprias credenciais
    const serviceId = 'GMS_Contato';
    const templateId = 'Template_Contato';
    const userId = 'UL-C05UDUPADyph_F';

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        alert('E-mail enviado com sucesso, agradeçemos seu contato.', response);
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
        setFormError({});
      })
      .catch((error) => {
        alert('Erro ao enviar e-mail, tente nos contatar pelo WhatsApp.', error);
      });
  };

  return (
    <section className='section' id='Contato'>
      <div className='container mx-auto h-[60vh] lg:bg-bgcontact bg-no-repeat mt-8 lg:mt-24'>
        <div className='flex flex-col lg:flex-row items-center '>
          {/* Formulário */}
          <form
            className='flex flex-col border rounded-3xl w-96 h-96 mt-14 px-10 py-5 bg-main'
            onSubmit={handleSubmit}
          >
            <input
              className={`bg-transparent border-b py-3 outline-none w-full transition-all placeholder-light ${
                formError.name && 'border-red-500'
              }`}
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Seu nome'
            />
            {formError.name && (
              <p className='text-red-500 text-sm mt-1'>{formError.name}</p>
            )}
            <input
              className={`bg-transparent border-b py-3 outline-none w-full placeholder-light transition-all resize-none ${
                formError.phone && 'border-red-500'
              }`}
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Seu Telefone'
            />
            {formError.phone && (
              <p className='text-red-500 text-sm mt-1'>{formError.phone}</p>
            )}
            <input
              className={`bg-transparent border-b py-3 outline-none w-full placeholder-light transition-all resize-none ${
                formError.email && 'border-red-500'
              }`}
              type='text'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Seu Email'
            />
            {formError.email && (
              <p className='text-red-500 text-sm mt-1'>{formError.email}</p>
            )}
            <textarea
              className={`bg-transparent border-b py-6 outline-none w-full placeholder-light transition-all ${
                formError.message && 'border-red-500'
              }`}
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Deixe sua mensagem'
            ></textarea>
            {formError.message && (
              <p className='text-red-500 text-sm mt-1'>{formError.message}</p>
            )}
            <button
              type='submit'
              className='flex btn btn-sm bg-white hover:bg-slate-200 w-28 text-main mt-5 items-center justify-center text-center'
            >
              Enviar
            </button>
          </form>
          {/* Imagem */}
          <div
            className={`${isMobile ? 'hidden' : 'flex-1 bg-bgressocontact bg-no-repeat lg:bg-right-top h-[60vh] w-auto'
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
