declare module 'node-key-sender' {
   interface KeySenderOptions {
      modifiers?: string[];
   }

   function sendKey(key: string, options?: KeySenderOptions): void;

   export = {
      sendKey,
   };
}