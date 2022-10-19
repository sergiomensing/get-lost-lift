import {PropsWithChildren} from "react";

export const ComponentLayout = ({children}: PropsWithChildren) => {
    return (
        <div className="max-w-prose px-4 mx-auto my-8">
            {children}
        </div>
    )
}