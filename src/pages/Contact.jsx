export const Contact = () => {
    const HandleFormSubmit = (formData) => {
        // console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    };
  return (
    <section>
      <h2 className='container-title'>Contact Us</h2>

      <div className='contact-wrapper container'>
        <form action={HandleFormSubmit}>
          <input
            type='text'
            className='form-control'
            required
            autoComplete='false'
            placeholder='Enter Your Name'
            name='UserName'
          />
          <input
            type='email'
            className='form-control'
            required
            autoComplete='false'
            placeholder='Enter Your email'
            name='E-mail'
          />
          <textarea
            rows='10'
            className='form-control'
            required
            autoComplete='off'
            placeholder='Enter Your message'
            name='message'
          ></textarea>
          <button type='submit' value='send'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
