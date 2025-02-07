import * as Toast from '@radix-ui/react-toast';

// eslint-disable-next-line react/prop-types
export default function Notification({notification, onChange}) {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" open={notification} onOpenChange={onChange}>
        <Toast.Description className="ToastDescription">Product was added to basket</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  )
}
