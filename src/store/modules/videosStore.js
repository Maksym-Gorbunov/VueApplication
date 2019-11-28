/* eslint-disable */
//import axios from 'axios';
import usersStore from './usersStore'
import commentsStore from './commentsStore'
/* eslint-enable */


const state = {
  videos: [
    {
      id: 1,
      title: "video_1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae quam vitae lorem facilisis vehicula. Suspendisse ipsum elit, dignissim non nisi eget, congue imperdiet mauris. Vestibulum eleifend eget enim sed molestie. Morbi dignissim erat imperdiet, ultricies urna eget, posuere libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      screenshotUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAxQMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYIBwD/xABKEAABAwIDAgkHBgwFBQAAAAABAAIDBBEFEiExUQYTFCIyQWFxoQdCgZGxstEjUmJys8EVFiQzNkNTZHOT4fAnNHSD8SZUgpKU/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EAC8RAAICAQIEBQMEAgMAAAAAAAABAgMRBBITITFRIjIzQXEFFGEjQlKBNLEVJKH/2gAMAwEAAhEDEQA/APacR/yFT/Cd7Ckan0ZfDGVepH5MKwXXhT0rLdPTvmcGxtLiihXKbxHmJssjBZZe/A1RlvlF911d/wCM1OM4Kv3sM4KE9PJC7LI0g9qpThODxJYLVdsZLKKrhZCPRE5cGiNxUhohciGIieVwaInIg0RuC4NDHNU5CyROapDTInBcGmRO2qQ0RORI4jcUSOGEojiMoiBhUkMY5EgRpUkGh8nX6X0XdJ7jle0HrIy/q/8AiP8Ao9nGxb55AgxH/IVP8J3sKRqfRl8DKvUj8mGhIuF4X2PSSNhhVOyCkZYDM8XJXrfpmnjXSpY5s8/qbHObLthay0yuU8Up2T0j7gZmi4KzfqWmjbS3jmixp7HCaMdIdy8iehiV3uXDUiBzwjwNSInO3LgkitNVQxdN7b7gbolFsbGEn7FKXGIGbGk95smqmTD4eOrKrscjvoxvrR/byJxHufDG4ztYPWu+3kd4e5PHidNJtOUlA6pInHZljmSNuxwI7Cl4a6kp4IpI1ORsZFWRpCNBkDijRxG4osHMYSiBIyVKBYwlGQNJUnZNF5OT/wBYUXdJ7jld0HrIyvq7/wCq/wCj2kbFvHkStijsmG1bt0Lz4FJ1Hoy+BlKzbFflHnkeJ9RZHb6q8Nhnq5aX8sKw8JJ2tY0Foa0WCuQ12ohFRT6FKX0yDbZK7hLOXAhzQB1AI39S1LedwC+mQx0K1XwgqJWkcaQD1BJs1l9qxKQ6r6dCLzgGNxPK7M8kgebvVbaXHpcrCIZ8UY482Flu1TsGQ0skupSnxIDXIwW3IowbHw02OrA1dixNxmsNwVmujIxuEAJVYn9JXYacr2agHPrZZNY2k9vUrKpS6lV3t9BLVj9Wxn1E/cixWgc2MQ8rj1cwi3YR9y7FbOzahWV0kerwR27VDpT6Exva6hKhxd7HAtf4qrZpi1DUJ8maOjxGOpFn2D+/QqhZS49CzFp9CaWPS6UmNjIozNIumxYZVc6xTUgGML0WAcjHPRYOyML1OCGxheiSAbNJ5N3X4ZUP1ZPccruhX6yMz6t/iv8Ao9sGxbh5Mp40bYNXndTye6UnUelL4Hab1ofK/wBnj7ag714vae/2IkbVHeowA60O5Ud67BHCGPqjvXYCVRE6o7USiHtSK8lRYXujUMnckDKytOourVdQiyzADqat8ji2PUnwV+FSSyzOsubeEObSMYONqpLddj/fxRcT2gQq11mI+tbEctPDzt/WfvXKty8zOlaovEUfB9bNrYgd5KHEERuskSsFU3YTf6Mn3KN0WGlYj5zpL/lFMXj57AA4epQtv7WT4ukkQz0WVvG05u3eBb1hMjZnlICVTXiiLRVro3hpNnAoLaU0HVc08GtwutFQwRvN3dRWVbXtZoRlnmTVEe5KixyeQPW3YCVbq5i7HhA41Lt6s7EVuIN5Sd6nYDxWIak71Owh2sYZzvU7COIanyXyl3DegF9rZfs3K1pI4tM/6nPOmf8AR7uNi1zzRRx82wLET+6y+6Uq705fA7T+tD5X+zwwTLye099vHibtUbCdw7jtFG0lMaZrrtp2RjpkSiC5FOpqLNOqdCAic8AaqmdI/Izb1lX64JLLKFtmXhE0UQpWNszNK4XDdyiUt/wFGGxfkqkyVMh5wDR0nnYAj5RQjxWS/BHJVRUxLKdmZ3W46n+iZGpy5yAdqjygiq+oqZSS5w9OqNRgvYW52S9xmacec0+gfBF4WD4+5Yp8SnhIDibesf33FBKmEhkNROHUOYfWwz6mwJGo6nD+/UqVtModDSpvjZyKmKUnFPLo+rVvaDsTabNywyvqKtryh+FVZaWm9iEq+obp7TYskFRA146xr3rIlHbI0IgrE2fJuVml8zrfKZqSTKbBaUVky5ywQulR7RbmIZVO0HeNMqnadvNd5Jn5uHmHj6Ev2blY0y8ZR18s0M6EWgYgP4RG3B/Ez+6S+4Uu3yMbR6sflHPwlXmtp7fcOEqjaTuHiRRtJTPnPK7ATZG99gpSAbB1ZNZhKtVQyypbPCGUcXFtfUSC5B0G8/09qZZL9qF1Q/ey1Vh1PTNZpympOp+a1KrxOX4Q+3MYY92BKuexFPTGzW9e871drj+6Rm2Tz4IjYYAB96GUyYVlgRgBL3Ddo1zApyQ4kMkYIsdiOMhbiQwyGnlGZxy7bjaO3vTuUkKWYPkHg/lEUb3DrMcjRsBP93VBrZLBqRlxYZKEV4aojft7xt9ifPxRyVK3tng1+CTF8ZYetY2ojhmxW8xFxIfJuUU9RtnlMbVmziO1bFZiWvmV86bgTkQuXYIbEzKcEbjYeSJ1+H+HD6E32bk+heMqax/os6JGxXTIB/CT9HcU/wBHL7hQWeRjKfUj8o5zEmgXn2j2O4eHqNpO4cJLIdoSkKZV20JzI3yXBRKIDmD3HjZwBqG69+7xsrcVtjkpz8UsBemiaZmtdqyBuYj5zv71VSyWFn3ZeqinLHYHYrU5pqiYm+X5Nn3/AAViiGIqJT1NjbcgXSRl3OO12t1YsljkVa455l8NACr5LeEiNzlKQEmRl6LAGRriiQLZWmAOXvTYMVMMYA7PIIn7JYvFp+Cq6pYWexc0Usy2sgrjauNv2jh7EcOdYuz1Xg0WAuOcLM1KNPT9C5ihtE/uSaebLM34TFVjuee9bVa5GFc+ZULk3BXyIXKcHCX7VOCMmy8j5/xBw76k32bk6nzFXWekdHK2ZQM4TG3BvFT+5Te4UE/Kw6vPH5OaxNHa+YLE2M9bviOE7PnBdsZ25C8ez56jYyd6PuPZbpBdsZO9Eck7bHIbk7EUYMCUx2GML5gdCMxI7mj4lFc8RApW6WQxSNPJppjfnyG3cP8AhUrH4lHsaVS8LkZnEHZoGD57i4+krTqXiMW59CWjZsSrGNqRPLoNEuI2RSmlyd+5PjHJXlLBC2drtoypjgBvTJL6IcE5K735nadFup702McC5sv0cnI5qcnTi4yXDv1+9JtjxE0Nqnw5JiEmSdhdt1efSf8AhR0jgJeKeTT4EznX3BZWpZradcibGpMsLu1BplmQ294gYuqddxW1BGBZLLKZlZfpJ+1idyGmZnzl21kb0JxzbdLwXbWRuNp5G5Wu8oeHAHzJvs3J1UcSK2qa4Z0mrBmgvhT+jOL32cim9woZeVhQ86OYYhBoHTn+Wfist57Hp4yg31CUFJhj7cZibmE9QpifvSHOf8R22PsyyMNwY6/hqT/5T8UHFs/idsIZ6PCoxdmKSPO4U9r+KlTsf7TtsfcFzPhjB4p75D1XbbVWIqT6ibJRXQJ4MzI4A+bED6SbpGoZY00cBakF8MjZ1luZUZv9Vs0K/TwZLEAQyI9Q5vqK2Kvcwbl0LNFsSLCxUSzt0KCLGTQNmbmnY3ZfS6twfIpz6kUogzEAyN1tc6o1uFOUSMtjA6bj6LKVnsC5ItUlPxlpJG5adutvnFLnPHJdRkIN830Fa0yyPnluIgde3sUdFhErm9z6FqjY6WUyPGrik3SSWEWaY5eTXYXHxVOXnQu0CyL5ZZr1RwgTwhqRmyNOwaq3pK/cr6yz2MnUvJdYGxO07gtatGJYytkgBsXPPoTcsrtxPrQDrefQF2WdmImWH6fguyztyNt5GRGPKJh2TNfJNt/huTK28iNQ1sOlU8oAzhO3PwbxVuzNRTDX6hQzeIth1rM0vyc50fB90jmt5ZA0neDayw5apL2Z6taTnnJoKLgU+Vod+EacdXQJVOWuj2Ol4HjBfHAR1iRiVNYbmJf3q7EfcY5bWUqzgaGx3OK09huZ/VMhrV/ELLnywZ+pwSCF/Or4nAO1s2ytR1La5RJemiurJcLIlnqizZoG92xRdyig6XmTwEKLWjpTujIPoKq2rxsvU84ozmMU5a6ojHmvzjuP9VpUTykzI1UMSaIKCW9lNsQaJBKRmZtwqyeC3KOUDqiEnUbRqCrMJFSyBQkjJcSAQdpb1hWEypKDQ6ldDHKDUNLmja0KJbmuR1bipeIJTYhTvYBFC9wGwHQKvGmWfEy1K6DWIohYySoeDJsGxoFgO5FKSiuR0IOTyw3htIS5tgqN1nI0aKgxVzspqbU2AFmhU4Rc5FyclCJjMRqeMe5xOi2aa8LBh327mD4YTOXOe7IwdJx9itSltRSxvfPoT8lpP+4f4JfEn2J2V9xOTUfXO/wU759iNlfcaaeiG2d+vaF2+fYjZX3Nj5IIqZnlBw4xPe52SbQ/w3J1MpOXNFfUxiq+R0YNitmaDeE/6N4t/opvcKGflYdfnXyc3UrLPaCHAdrbLDm1g9dSnuNhhWHMljaBLINL2bfTxWVba88kWp2xggucDc5t2yTk78yVvl/ET95D8AzEsFqWR3HGaD52idXNrzRGx1NU+jMhU0EvGkAOIGm1aULo4EWUyci7hdK6mhe5wIGZgv8A+QSrbFOSSGU1uCZZoTxcUzPOhncPQdUq1ZafdFip7crsyji8TXxtqo7kAWeOuydp5YexlfVQUlvRnCDTVBaeidWlaL8ayZS8EsBijna9uVx0KpWQwaFU1JYZLLBdAphyrKctIDtaCnxswV3URcj7XetFxQOCSxUevRv2lDK4ONISpaI3GiqztLddITMkNHESSC7cq22VjLeY1ozuK4iZnHVaNFG0zNTqNwGDXVEmnRB2q+sQRmNubwgjHRtyDPGHDzW58oHxKryt5lmFPLmI6ki/YR/zVysfcl0rsN5JF+xj/mqeI+4DqXYaaeEfqG/zCp4j7kOuK9jW+SWKJnD3DyyINOSbUOJ/VuT6JNzKWsjFVPCOhRsV4ySpjNvwRXXFxyeT3SlX+lL4Haf1ofK/2eSx5dHBjbrxWWke3aPTsFYDh1ObAXjHUNy3Pp9ea02zx+rk+NIv5D8+3oC0HUu5W3FDFmP5JJaVw5vU0LK18Go+Ys6ZriLkeVyU0pccs5Z2ZAVlxmsdD2WW0VZqWZzm8bUuka1wdlygXsmxsS6IlRb9wXE4HGK2nGvGtBFt4CsyT4UWKjL9WSK0jxTzua8XiftRpbo5XU5vZLD6AvEaDJpe8R/Nvvs7Fbptz8lHUUY5roDGSPppCyTTXQ709xUllFSM3B4YVpq/QNdsVSynsXq9R7MutlieNoSXGSLClFkgER6whe4JKI8PhZtshxJhpwRFNiTIwcqONDfUCeoiugGrcRc+93K7XQkZ92pcijHHLVvAsQz2qw3GCKeJWPkEIo2QNsxuZ+y/UEiUnIsRSr6dRrxI/pOZ6SVCaQL3S6jeL3uapyQ4s+ygDpOPcF2SBCYxt449zEWGRyNd5JnRnh5h+USg5Jek2w/NuT9OnvK2sxwXg6ECvmODeEl/xdxTLe/I5bW+oUFnkeRlPqRx3R4BhfKzIM3H26xzl5u5w28sHtKVL3PR8FbVPiawwVgAGh54HtWdus/aZ+rVOc5X/gabSTnY2cf7jvipUr33KO+tdgdi2G13EOLJZrdYMpQtzXnLmmvpUlyR57WUNY+Z3Fym311brtrS5mzKO7miicKxCUn5YDveU9ailewl1WdyxhmFTUlYyplkDgNtjc7EFuojKG1E16dxluYuLwXY9zBrYkKNPPnzGXxzHKAdLiAjaYp28ZCdo22V2dOecepQr1GFtn0FqaFkkeeH5WAj0t+KmFzTxLkzrNMpLMeaBbqSRpJgdmA807R6NqsqafUpuuUXyGCeaLpMcFOyL6EKyUeo4V7x1n1IeCgvuGhHVr3bMx9ClVJEO9saBUTO5rSD23ReCPUDdOfQnjoWhwMzszuprdSglby5Bxpy/EEoqOR7dQI4919veVWlbHJcjRLHZFgUcDW8+x9KU7Z55FhU1pcxhpaUeZHbtv8AFFxZguqlDeTUwHNbDZTvmRw6vwfGGO3N4sdzQu3SO21+2BCyNnnR+C7MjsQ/BqvJhk/HWhs5pOWXZb9m5WdJnirJn/U9v2zx+D3YLXPNg/hC90WA4lI3pMpZXDvDSl2rMGhtLxbF/lHh1FjNTM9o5O0H2rytmnhFdT21cnLqjf4TwnqI4GMkgZzR1ZrkepJrvnT5TK1P02MpZTCR4UedxPra5Nf1CzPQqr6Z+QbivChojLOKuXDW10iVtl3Ut6f6a92cmDrMSdGXkRh4v13Tq6UzcknGOUDzwjsMvEAdxVhaPPuVXq0uqGfjFE5tnQuBG51gfBS9G17grWx7EVVjMUzHNyhrjpcuvbwRw0ri8nT1aawBJQ103ybhl3hXY8o8zOk1u5FiAuhN4pS13tSpYfVDoScejLBnZKfymAOPz49Cg2Y8rHcRSXjQmSmf0Kojskbe3rU7prqiHCt9JCcja7oy0z/Rb713F/DB+3T6YF5GGi5lp2jsA+K7i/hk8BL3R8RSM0kqHSfRZs8F36j6LB2Kl1eROWsjbampmjtcVHCb8zO46j5IlWarqZHXcQB2Jsa4IRO6yRA+eY7XlGoREynN+5GZZHfrfFGoRXsKcpP3G3Nunr3qeXY7L7iEkDpeK7CIy+4299rgpwgeZsfJAf8AEDD+dfmTfZuTqUt5W1T/AEzosbFcM0HcJbng5iuW+bkc1rb8hQT8rGVepH5OeKCKrLhcSFxO8jVefsnA9nTGa6m0w3D658LX8YTfWxzaeKzLJwyTZdCPILxYfUsLfygXPUQUhuJVlqIP9pBiFFPG3Mai/wBVdGSG0XQk8YMniLMocXEOv22V2pmo5eEAzwEvOVjR16uK0IzWDMsry+SKjoHXI5gG6+1OU1gqyreRnJ3XJtH61O9AcNiiLW+aPuUZI249xnFOdseB3AosojaxzYR1y2dvsUO78BqP5HWLds9+9t139E9PcUNzHpw+lq5sLqfZOoSRX3BhXZRwppzlFpmN7BHYqN67E7OXUXkcp1493cAo4q7E8GT9x3IJsusunaLqONHsE9PLuMOHSnY9ru2xRcddgHpZDHYfMOph9CnjRFvSzEFFJ5wHdZTxUD9vITk0jdeLa7uU70weE0MeJBtgHguWO4LTXsa3yTX/AB8w+8YbzZdf9tysab1OpU1npPkdBjYtAyAfwkJHB3FCNCKOa3/oUM/KxlPqR+UeC4PUzkE8fJcEW55Xm7oR7HtIeJYZs8ExCrc8MdUPLdxKzJ8nyK+oprxnBqIJpMgBcT36oNzMqcFkq1b3Oa4ONwQdqCfUdSlkwWLsaJn2CuV9D0dXOHMD1A9itwFWoqcUx7+cCdN5TsspySyRvgjJ1b4lGmwHFEBgjLuj4pibEuEexCYWZ9h9ZR5FSSyMljYMth4rkyWlgiLQHGw61IoTeuCY5uxqhkLoKb7zod6lHJse4kDQn1qMIPcxvGP5vOPWowid8j58jxoHEKcIjfLuNbI9oNnFTJIFWT7nwe4utmO1c0jt8s9RD+ctZF+0jLyIyV93jNo3Z2KHFB5Zs/JO9zuHGHXO1kv2bkzTL9Qqa5/onQIWkYp//9k=",
      views: 667, 
      category: "", 
      length: "45:27", 
      //antal likes
    },
    {
      id: 2,
      title: "video_2",
      description: "Pellentesque suscipit, odio a posuere rhoncus, nulla turpis accumsan orci, ut semper tellus lectus sed nibh. Fusce blandit enim quis nisl viverra, ac sagittis odio porta. Proin urna odio, euismod at ornare sed, efficitur quis tortor. Maecenas congue nibh elit, nec rutrum neque condimentum id. Maecenas imperdiet arcu vitae orci dapibus, sit amet vulputate eros laoreet. Curabitur elementum cursus massa ut ullamcorper",
      screenshotUrl: "data:image/jpeg;base64,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",
      views: 4, 
      category: "History", 
      length: "45:27", 
      //antal likes
    },
    {
      id: 3,
      title: "video_3",
      description: "Nulla sagittis urna sit amet nunc euismod elementum. Vestibulum molestie nisl ut lacinia aliquam. Cras at iaculis ex, sit amet faucibus libero. Aliquam nec eros interdum, eleifend felis et, lacinia elit. Aenean ut metus tellus. Sed aliquam sem vestibulum, finibus justo vitae, vulputate diam. Pellentesque varius blandit urna eget consequat. Sed sed odio aliquet, congue est et, venenatis ante.",
      screenshotUrl: "data:image/jpeg;base64,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",
      views: 12, 
      category: "Science", 
      length: "45:27", 
      //antal likes
    },
    {
      id: 4,
      title: "video_4",
      description: "Vivamus non tellus erat. Suspendisse dictum condimentum dolor. Proin hendrerit quam tempus, tempus ex sed, accumsan risus. Vivamus sed velit enim. Fusce gravida vulputate turpis quis viverra. In eu est lorem. Phasellus tincidunt imperdiet commodo. Sed eget semper nibh. Phasellus at posuere nisl. Vestibulum posuere aliquam diam vitae mollis. Vestibulum vel leo libero. Sed nibh nunc, cursus nec dolor nec, facilisis commodo orci. Ut eget lectus augue. Nullam ut magna leo.",
      screenshotUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRRV2S-HAzHVIfS0EtgfIeWnej05TRN1PqWQCLW44h3NqM9UOtQ&s",
      views: 22, 
      category: "Music", 
      length: "45:27", 
      //antal likes
    },
    {
      id: 5,
      title: "video_5",
      description: "Curabitur vel diam in dui dictum bibendum. In ut tellus venenatis, fringilla nunc non, congue nunc. Suspendisse quis nisl ullamcorper, posuere augue in, tincidunt orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce mollis turpis quis pellentesque consequat.",
      screenshotUrl: "",
      views: 4, 
      category: "Sport", 
      length: "45:27", 
      //antal likes
    },
    {
      id: 6,
      title: "video_6",
      description: "Donec euismod sapien auctor tortor mattis, sed egestas purus commodo. Ut vestibulum nisl tempus eleifend accumsan. Donec eget ligula nisl. Donec non varius turpis. Nullam est tortor, auctor ac bibendum in, congue non ante.",
      screenshotUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWH2lHsSm96ojSd1hFwD3rEotJaTuw9rKzgR-gQlkVBc6dr9Srw&s",
      views: 4, 
      category: "Sport", 
      length: "45:27", 
      //antal likes
    }
  ]
};

const getters = {
  videos: state => state.videos
};

const actions = {
  
};

const mutations = {
  
};

export default {
  state,
  getters,
  actions,
  mutations
};
