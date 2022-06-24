Los lenguajes de programación son sincrónos
Javascript por defecto es sincrono por defecto y no bloqueante (unico hilo)
- Javascript es single-threaded (un hilo)
- Bloqeuante: una tarea no devuelve el control hasta que se ha completado (ejemplo: alert)
- No bloqueante: una tarea devuelve inmediatamente con independencia del resultado. Si se completó, devuelve los datos, sino un error
- Sincrono: Las tareas se ejecutan de forma secuencial. Se debe esperar a que la tarea este completa para que continue con la siguiente
- Asincrono: La tareas se pueden realizar mas tarde, una respuesta puede ser procesada en diferido
- Concurrencia: Modelo de concurrencia basado en "loop de eventos (eventloop)"
- Eventloop: Patron de diseño que espera y distribuye eventos o mensajes en un programa

Callback: función que se pasa como argumento en otra funcion para ser invocada
Promesas: Función no bloqueante y asincrona que retorna un valor ahora, en el futuro o nunca
Async / await: Permite estructurar una funcion asincrona sin bloqueo de una manera similar a una función sincrona ordinaria

Javascript es: asincrono y no bloqueante, con un bucle de eventos implementado con un unico hilo para sus interfaces


* Eventloop: Patron de diseño que espera y distribuye eventos o mensajes en un programa

- Memory heap: los objetos son asignados a un monticulo (espacio grande en memoria no organizado)
- callstack (pila): apila de forma organizada las instrucciones de nuestro programa.
  + LIFO (Last-in, First-out)
- Task queue: Cola de tareas, se maneja la concurrencia, se agrega las tareas que ya estan listas para pasar al stack (pila). El stack debe estar vacio
- Microtask queue: Las promesas tienen otra forma de ejecutarse y una prioridad superior
- Web APIs: setTimeout, XMLHttpRequest, File Reader, DOM. NODE: fs, https

El eventloop es una tarea asignada para mover del task queue al stack, solo si el stack está vacio
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
