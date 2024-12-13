import TransferNavbar from "@/components/transfer/TransferNavbar";
import NavbarWrapper from "@/components/wrapper/NavbarWrapper";

const FileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarWrapper link="/transfer">
        <TransferNavbar />
      </NavbarWrapper>
      <main className="required-h-screen">{children}</main>
    </div>
  );
};

export default FileLayout;
