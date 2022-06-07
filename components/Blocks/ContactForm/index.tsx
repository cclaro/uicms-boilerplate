import React, { useState } from 'react'
import Image from 'next/image'
import Block from '../../Block';
import Container from '../../Container'
import { ContactFormWrapper, ContactFormContent, ContactFormBlock } from './styles'
import Input from '../../Input';
import Select from '../../Select';
import events from '../../../docs/data/events.json'
import { validate } from '../../../utils/validate'
import ButtonLink from '../../ButtonLink';

interface ContactFormValues {
  name: string
  email: string
  title: string
}
  
interface IErrors extends Partial<ContactFormValues> {}

const ContactForm = () => {
    const [values, setValues] = useState<ContactFormValues>({ name: '', email: '', title: ''  })
    const [errors, setErrors] = useState<IErrors>({})
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = validate(values)
        if (errors && Object.keys(errors).length > 0) {
          return setErrors(errors)
        }
        setErrors({})
        setLoading(true)
        setSubmitted(true)
        try {
          const res = await fetch('/api/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
          if (res.ok) {
            setValues({ name: '', email: '', title: '' })
          }
        } catch (err) {
            console.log(err)
            setSubmitted(false)
        }
        setLoading(false)
      }
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
      ) => {
        setValues((prevInput) => ({ ...prevInput, [e.target.name]: e.target.value }))
      }

    return (
        <Block backgroundType='bgGray50'>
            <Container>
                <ContactFormWrapper>
                    <ContactFormContent>
                        <h3>H3 Title text</h3>
                        <p>Content paragraph text</p>
                    </ContactFormContent>
                    <ContactFormBlock>
                    {submitted ? (
                        <>
                            <Image src="/sent.gif" height={480} width={480} alt="Success" />
                        </>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <Select
                                id="events"
                                name="title"
                                value={events}
                                onChange={handleChange}
                                error={!!errors.title}
                                errorMessage={!!errors.title ? errors.title : ''}
                            />
                            <Input
                                value={values.name}
                                onChange={handleChange}
                                id="name"
                                name="name"
                                label="Your full name"
                                placeholder="Jane Doe"
                                type='text'
                                error={!!errors.name}
                                errorMessage={!!errors.name ? errors.name : ''}
                            />
                            <Input
                                value={values.email}
                                onChange={handleChange}
                                id="email"
                                name="email"
                                label="Your email address"
                                placeholder="jane@example.com"
                                type='text'
                                error={!!errors.email}
                                errorMessage={!!errors.email ? errors.email : ''}
                            />
                            <ButtonLink
                                text="Let me know!"
                                asButton
                                slug=''
                                buttonType={'bgGray500'}
                            />
                        </form>
                    )}
                    </ContactFormBlock>
                </ContactFormWrapper>
            </Container>
        </Block>
    )
}

export default ContactForm