/**
 * Make <details> tags with data-persist-state="open|closed" UA-persistable.
 * The initial state is passed like `data-persist-state="open"` or `data-persist-state="closed"`.
 * Once detail is opened or closed by a user, a cookie will store the state and
 * do the same action upon next load of the same page with <details> tag of the same ID.
 *
 * <details id="unique-id" data-persist-state="closed">
 *   <summary>Earlier</summary>
 * </details>
 */
document.addEventListener("DOMContentLoaded", function () {
  function setCookie(name, value, days) {
    const expires = days
      ? "; expires=" + new Date(Date.now() + days * 864e5).toUTCString()
      : "";
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
  }

  function getCookie(name) {
    const matches = document.cookie.match(
      new RegExp(
        // eslint-disable-next-line no-useless-escape
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)",
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : null;
  }

  // Set the state from the cookie on page load
  const detailsElementsToPersist = document.querySelectorAll(
    'details[data-persist-state="open"], details[data-persist-state="closed"]',
  );
  detailsElementsToPersist.forEach((details) => {
    const state = getCookie(details.id + "_state");
    const initialState = details.dataset.persistState == "open" ? true : false;
    details.style.transition = "opacity 0.5s ease";
    details.open =
      state == null ? initialState : state === "open" ? true : false;
  });

  // Attach event listener to save its state to a cookie
  detailsElementsToPersist.forEach((detail) => {
    // Ensure the detail has an ID for cookie naming. If not, generate one.
    if (!detail.id) {
      detail.id = "detail_" + Math.random().toString(36).substr(2, 9);
    }

    detail.addEventListener("toggle", function () {
      if (detail.open) {
        setCookie(detail.id + "_state", "open", 7); // Set cookie for 7 days
      } else {
        setCookie(detail.id + "_state", "closed", 7); // Set cookie for 7 days
      }
    });
  });
});
