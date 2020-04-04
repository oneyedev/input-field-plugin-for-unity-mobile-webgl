mergeInto(LibraryManager.library, {
  Prompt: function (name, message, defaultValue) {
    if(UnityLoader.SystemInfo.mobile){
        const name_str = Pointer_stringify(name);
        const message_str = Pointer_stringify(message);
        const defaultValue_str = Pointer_stringify(defaultValue);
        const result = window.prompt(message_str, defaultValue_str);
        if(result === null) {
            SendMessage(name_str, 'OnPromptCancel');
        } else {
            SendMessage(name_str, 'OnPromptOk', result);
        }
    }
  }
});