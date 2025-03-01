import { Suspense } from "react";
import SupportersPage from "../supporters/SupportersPage"; // Import your component


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupportersPage />
    </Suspense>
  );
}
