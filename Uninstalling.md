## Uninstalling Cookies

Ares plugins plug IN easily, but taking them out requires a bit of code fiddling.

1. Open the [tinker](https://aresmush.com/tutorials/code/tinker.html#how-to-tinker) page (Admin -> Tinker) in the web portal with a coder character.

2. Modify the database definition.  Copy/paste the following to the tinker file, right below `module AresMUSH`. This will let us clear out the database fields.
 
```
   class Character
      attribute :total_cookies
      attribute :total_cookies_given
    end
```

3. Add the following code to the `handle` method of the tinker file.
 
```
   begin 
      Cookies.uninstall_plugin
      Manage.uninstall_plugin("cookies")
      client.emit "Plugin uninstalled."
      
    rescue Exception => e
      Global.logger.debug "Error loading plugin: #{e}  backtrace=#{e.backtrace[0,10]}"
      client.emit_failure "Error uninstalling plugin: #{e}"
    end
```

4. Click "Save".

5. Switch to a game client window and run the `tinker` command.

6. Switch back to the web portal tinker window and click "Reset".

7. Manually remove the cookies-related files, including:
    * aresmush/plugins/cookies
    * aresmush/game/config/cookies.yml
    * Web portal files - See the /webportal folder in this repo for a specific list of files.
