import { UIModalProps } from "@/interfaces/widgetInterfaces";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function UIModal({ isOpen, onClose, children }: UIModalProps) {
  return (
    <Dialog onOpenChange={onClose} open={isOpen} modal>
      <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
    </Dialog>
  );
}

export default UIModal;
