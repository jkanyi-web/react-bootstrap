import { Alert } from 'react-bootstrap'

const AlertsComponent = () => {
  return (
    <>
    <h2>Alerts Component</h2>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  )
}

export default AlertsComponent
