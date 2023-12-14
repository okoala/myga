import createStorageStateHook from './createStorageStateHook';
import useStorage from './useStorage';

/**
 * Hook which will use `chrome.storage.local` to persist state.
 *
 * @param {string} key - they key name in chrome's storage. Nested keys not supported
 * @param {*} [initialValue] - default value to use
 * @returns {[any, (value: any) => void, boolean, string]} - array of
 *      stateful `value`,
 *      function to update this `value`,
 *      `isPersistent` - will be `false` if error occurred during reading/writing chrome.storage,
 *      `error` - will contain error appeared in storage. if isPersistent is true, there will be an empty string
 *      `isInitialStateResolved` - will set to `true` once `initialValue` will be replaced with stored in chrome.storage
 */
function useStorageLocal(key, initialValue) {
  return useStorage(key, initialValue, 'local');
}

/**
 * Hook which will use `chrome.storage.sync` to persist state.
 *
 * @param {string} key - they key name in chrome's storage. Nested keys not supported
 * @param {*} [initialValue] - default value to use
 * @returns {[any, (value: any) => void, boolean, string, boolean]} - array of
 *      stateful `value`,
 *      function to update this `value`,
 *      `isPersistent` - will be `false` if error occurred during reading/writing chrome.storage,
 *      `error` - will contain error appeared in storage. if isPersistent is true, there will be an empty string
 *      `isInitialStateResolved` - will set to `true` once `initialValue` will be replaced with stored in chrome.storage
 */
function useStorageSync(key, initialValue) {
  return useStorage(key, initialValue, 'sync');
}

/**
 * Hook which will use `chrome.storage.session` to persist state.
 * By default, `chrome.storage.session` not exposed to content scripts,
 * but this behavior can be changed by setting chrome.storage.session.setAccessLevel() in the background script.
 * https://developer.chrome.com/docs/extensions/reference/storage/#method-StorageArea-setAccessLevel
 *
 * @param {string} key - they key name in chrome's storage. Nested keys not supported
 * @param {*} [initialValue] - default value to use
 * @returns {[any, (value: any) => void, boolean, string, boolean]} - array of
 *      stateful `value`,
 *      function to update this `value`,
 *      `isPersistent` - will be `false` if error occurred during reading/writing chrome.storage,
 *      `error` - will contain error appeared in storage. if isPersistent is true, there will be an empty string
 *      `isInitialStateResolved` - will set to `true` once `initialValue` will be replaced with stored in chrome.storage
 */
function useStorageSession(key, initialValue) {
  return useStorage(key, initialValue, 'session');
}

/**
 * Use to create state with chrome.storage.local.
 * Useful if you want to reuse same state across components and/or context (like in popup, content script, background pages)
 *
 * @param {string} key - they key name in chrome's storage. Nested keys are not supported
 * @param {*} [initialValue] - default value to use
 * @returns {function(): [any, (value: any) => void, boolean, string, boolean]}
 *          - useStorageLocal hook which may be used across extension's components/pages
 */
function createStorageStateHookLocal(key, initialValue) {
  return createStorageStateHook(key, initialValue, 'local');
}

/**
 * Use to create state with chrome.storage.sync.
 * Useful if you want to reuse same state across components and/or context (like in popup, content script, background pages)
 *
 * @param {string} key - they key name in chrome's storage. Nested keys are not supported
 * @param {*} [initialValue] - default value to use
 * @returns {function(): [any, (value: any) => void, boolean, string, boolean]}
 *          - useStorageSync hook which may be used across extension's components/pages
 */
function createStorageStateHookSync(key, initialValue) {
  return createStorageStateHook(key, initialValue, 'sync');
}

/**
 * Use to create state with chrome.storage.session.
 * Useful if you want to reuse same state across components and/or context (like in popup, content script, background pages)
 * By default, `chrome.storage.session` not exposed to content scripts,
 * but this behavior can be changed by setting chrome.storage.session.setAccessLevel() in the background script.
 * https://developer.chrome.com/docs/extensions/reference/storage/#method-StorageArea-setAccessLevel
 *
 * @param {string} key - they key name in chrome's storage. Nested keys are not supported
 * @param {*} [initialValue] - default value to use
 * @returns {function(): [any, (value: any) => void, boolean, string, boolean]}
 *          - useStorageSession hook which may be used across extension's components/pages
 */
function createStorageStateHookSession(key, initialValue) {
  return createStorageStateHook(key, initialValue, 'session');
}

export {
  useStorageLocal,
  useStorageSync,
  useStorageSession,
  createStorageStateHookLocal,
  createStorageStateHookSync,
  createStorageStateHookSession,
};
