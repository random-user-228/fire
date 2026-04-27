import { Suspense } from "react";
import ViewerPage from "./OpenClient";

export default function Open() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ViewerPage />
        </Suspense>
    )
}