import React from "react";
import {
  reactExtension,
  Banner,
  useSettings,
  Image,
  Link,
  Style,
} from "@shopify/ui-extensions-react/checkout";

// Set the entry points for the extension
const checkoutBlock = reactExtension("purchase.checkout.block.render", () => (
  <App />
));
export { checkoutBlock };



function App() {


  const { link, deskSource, mobileSource, accessibilityDescription } = useSettings();

  // const link = "#"
  // const deskSource = "https://marmeto.com/cdn/shop/files/Maintanance_2x-100_51c6e1c4-9eb4-460c-a352-59fd7cd00790.jpg?v=1679300943&width=1500"
  // const mobileSource = "#"
  // const accessibilityDescription = "#"

  // Render the banner
  return (
    <>
      {link ? ( 
        <Link to={link}>
          <Image
            source={Style.default(
              mobileSource ? mobileSource : deskSource
            ).when({ viewportInlineSize: { min: "small" } }, deskSource)}
            accessibilityDescription={accessibilityDescription}
            loading="eager"
            cornerRadius="base"
          />
        </Link>
      ) : (
        <Image
          source={Style.default(
            mobileSource
              ? mobileSource
              : deskSource
              ? deskSource
              : "https://placehold.co/600x100"
          )
            .when(
              { viewportInlineSize: { min: "small" } },
              mobileSource ? mobileSource : "https://placehold.co/600x120"
            )
            .when(
              { viewportInlineSize: { min: "medium" } },
              deskSource ? deskSource : "https://placehold.co/600x100"
            )
            .when(
              { viewportInlineSize: { min: "large" } },
              deskSource ? deskSource : "https://placehold.co/600x100"
            )}
          accessibilityDescription={accessibilityDescription}
          loading="eager"
          cornerRadius="base"
        />
      )}
    </>
  );
}
