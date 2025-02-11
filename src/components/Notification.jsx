import * as Toast from '@radix-ui/react-toast';

// eslint-disable-next-line react/prop-types
export default function Notification({notification, onChange, message}) {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" open={notification} onOpenChange={onChange}>
        <Toast.Description className="ToastDescription">{message}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  )
}
