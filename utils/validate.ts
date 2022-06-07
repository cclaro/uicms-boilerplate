export const validate = ({
    name,
    email,
    title
  }: {
    name: string
    email: string
    title: string
  }) => {
    const errors: { name?: string; email?: string; title?: string } = {}

    if (!name || name.trim() === '') {
      errors.name = 'Name is required'
    }

    if (!email || email.trim() === '') {
      errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address'
    }

    if (!title || title.trim() === '') {
      errors.title = 'Event Title is required'
    }

    return errors
}