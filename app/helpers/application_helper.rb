module ApplicationHelper
  def date_and_title(event)
    event.name + ' ' + print_date(event)
  end

  def print_date(event)
    event.end_at.blank? ? "Le #{l(event.start_at, format: :custom)}" : "Du #{l(event.start_at)} au #{l(event.end_at)}"
  end

  # def l(date)
  #   date.strftime("%d %B à %H h %M")
  # end
end
