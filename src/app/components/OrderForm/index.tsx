import styles from './orderform.module.css';

import Link from 'next/link';

const forms = [
  {
    id: 0,
    left: [{
      title: 'Ваше имя*',
      id: 'name',
      type: 'text',
      placeholder: 'Укажите имя',
      pattern: undefined,
    }, {
      title: 'Ваш телефон*',
      id: 'phone',
      type: 'text',
      placeholder: '+7 (___) ___-__-__',
      pattern: '^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$',
    },
    ],
  },
  {
    id: 1,
    mid: [{
      title: 'Название компании',
      id: 'company',
      type: 'text',
      placeholder: 'Укажите имя',
      pattern: undefined,
    }, {
      title: 'E-mail',
      id: 'email',
      type: 'email',
      placeholder: 'example@domain.com',
      pattern: undefined,
    },
    ],
  },
  {
    id: 2,
    right: [{
      title: 'Добавить комментарий',
      id: 'commentary',
      type: 'text',
      placeholder: undefined,
      pattern: undefined,
    },
    ],
  },
]

const OrderForm = () => {
  return (
    <div className={styles['wholesale-order']}>
      <h3 className={styles['minor-heading']}>
        Заказать расчёт или отправить запрос на сотрудничество
      </h3>
      <form action='' method='post' className={styles.form}>
        <div className={styles['wholesale-order__contact-form']}>
          {forms.map((form) => (
            <div className={styles['contact-form__column']} key={form.id}>
              {form.left?.map((el) => (
                <div className={styles['column__container']} key={el.id}>
                  <label htmlFor={el.id}>{el.title}</label>
                  <input
                    className={styles['wholesale-order__form']}
                    id={el.id}
                    type={el.type}
                    placeholder={el.placeholder}
                    pattern={el.pattern}
                    required
                  />
                </div>
              ))}
              {form.mid?.map((el) => (
                <div className={styles['column__container']} key={el.id}>
                  <label htmlFor={el.id}>{el.title}</label>
                  <input
                    className={styles['wholesale-order__form']}
                    id={el.id}
                    type={el.type}
                    placeholder={el.placeholder}
                    pattern={el.pattern}
                  />
                </div>
              ))}
              {form.right?.map((el) => (
                <div className={styles['column__container']} key={el.id}>
                  <label htmlFor={el.id}>{el.title}</label>
                  <input
                    className={[styles['wholesale-order__form'], styles.commentary].join(' ')}
                    id={el.id}
                    type={el.type}
                    placeholder={el.placeholder}
                    pattern={el.pattern}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <button type='submit' className={styles['wholesale-order__btn']}>Заказать расчёт</button>
      </form>
      <div className={styles['wholesale-order__agreement']}>
        <span>{'Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с '}</span>
        <span className={styles['agreement-link']}>{'Договором оферты '}</span>
        <span>{'и разрешаю обработку моих персональных данных в соответствии с '}</span>
        <Link href={'/privacy-policy'} className={styles.agreement_link}> Политикой конфиденциальности</Link>
      </div>
    </div>
  )
}

export default OrderForm;