let count = 0;

function cc(card) {
  // Only change code below this line
   // Проверяем карту и обновляем счетчик в зависимости от типа карты
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  }
  
  // Определяем действие игрока в зависимости от текущего значения счетчика
  let action = count > 0 ? "Bet" : "Hold";

  // Возвращаем строку с текущим значением счетчика и действием игрока
  return count + " " + action;

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');